import { baseURL } from "@/config";
import { TEducation } from "@/interface";




interface EducationResponse {
    success: boolean;
    data: TEducation[];
}

export const fetchEducationData = async (): Promise<EducationResponse> => {
    try {
        const response = await fetch(`${baseURL}/education`, {
            cache:"no-store",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: EducationResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog data:', error);
        throw error;
    }
};