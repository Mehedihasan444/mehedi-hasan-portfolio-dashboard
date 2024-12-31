"use client";

import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-red-600 mb-4">An error occurred</h1>
                <p className="text-gray-700 mb-6">{error.message}</p>
                <Button onClick={reset} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                    Try again
                </Button>
            </div>
        </div>
    );
}

export default ErrorPage;