import { baseURL } from "@/config";
import { TExperience } from "@/interface";




interface ExperienceResponse {
    success: boolean;
    data: TExperience[];
}

export const fetchExperienceData = async (): Promise<ExperienceResponse> => {
    try {
        const response = await fetch(`${baseURL}/experience`, {
            cache: "no-store",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ExperienceResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching experience data:', error);
        throw error;
    }
};