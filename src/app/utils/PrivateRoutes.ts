"use client"
import React, { ReactNode } from 'react';

interface PublicRoutesProps {
    child: ReactNode;
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ child }) => {
    return child;
};

export default PublicRoutes;

