import { useParams, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { gameModes } from '../data/gameModes';

export default function useGame() {

    const { gameMode } = useParams();
    const location = useLocation();

    const isAuthorized = location.state?.fromLanding;
    const activeMode = gameModes.find((mode) => mode.id === gameMode);

    return {
        gameMode,
        isAuthorized,
        activeMode
    }

}