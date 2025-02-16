import { baseURL } from "@/config";
import { TSkill } from "@/interface";


interface SkillResponse {
    success: boolean;
    data: TSkill[];
}

export const fetchSkillData = async (): Promise<SkillResponse> => {
    try {
        const response = await fetch(`${baseURL}/skills`, {
            cache:"no-store",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: SkillResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching skill data:', error);
        throw error;
    }
};