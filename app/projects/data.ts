import { baseURL } from "@/config";
import { TProject } from "@/interface";



interface BlogResponse {
  success: boolean;
  data: TProject[];
}

export const fetchProjectData = async (): Promise<BlogResponse> => {
  try {
    const response = await fetch(`${baseURL}/projects`, {
      cache: 'no-store', // or 'force-cache' if you want to cache
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: BlogResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    throw error;
  }
};