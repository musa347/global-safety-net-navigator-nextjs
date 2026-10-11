import type { ScenarioResponse, JourneyRequest, JourneyResponse, ErrorResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public errorResponse?: ErrorResponse
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const errorData = data as ErrorResponse;
      throw new ApiError(
        errorData.error.message || 'An error occurred',
        response.status,
        errorData
      );
    }

    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or parsing error
    throw new ApiError(
      error instanceof Error ? error.message : 'Network error occurred',
      0
    );
  }
}

export const api = {
  /**
   * Fetch all available scenarios
   */
  async getScenarios(): Promise<ScenarioResponse> {
    return fetchApi<ScenarioResponse>('/income/scenarios');
  },

  /**
   * Submit a journey request for a selected scenario
   */
  async submitJourney(request: JourneyRequest): Promise<JourneyResponse> {
    return fetchApi<JourneyResponse>('/income/journeys', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  },
};

export { ApiError };
export type { ErrorResponse };
