import { baseURL } from "@/config";
import { TBlog } from "@/interface";




interface BlogResponse {
    success: boolean;
    data: TBlog[];
}

export const fetchBlogData = async (): Promise<BlogResponse> => {
    try {
        const response = await fetch(`${baseURL}/blogs`, {
            cache: "no-store",
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