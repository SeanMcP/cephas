import React from 'react'
import { Router } from '@reach/router'
import HomeView from 'components/HomeView'
import SettingsView from 'components/SettingsView'

export default function() {
    return (
        <Router>
            <HomeView path="/" />
            <SettingsView path="/settings" />
        </Router>
    )
}
