import React from 'react'
import { Router } from '@reach/router'
import HomeView from 'components/HomeView'
import SettingsView from 'components/SettingsView'
import PATH from 'constants/path'

export default function() {
    return (
        <Router>
            <HomeView path={PATH.ROOT} />
            <SettingsView path={PATH.SETTINGS} />
        </Router>
    )
}
