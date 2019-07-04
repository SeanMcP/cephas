import React from 'react'
import ContentContainer from 'components/ContentContainer'
import ViewWrapper from 'components/ViewWrapper'
import { useSettings } from 'store/SettingsStore'
import appSettings from 'appSettings.json'

function SettingsView(props) {
    const [settings, saveSettings] = useSettings()
    const fields = []
    for (const field in appSettings.settings) {
        const current = appSettings.settings[field]
        fields.push(
            <label key={field}>
                <span>{current.label}</span>
                <input
                    defaultValue={settings[field]}
                    name={field}
                    type="text"
                />
            </label>
        )
    }
    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const dataToStore = {}
        for (const pair of data.entries()) {
            const [key, value] = pair
            dataToStore[key] = value
        }
        saveSettings(dataToStore)
    }
    return (
        <ViewWrapper title="Settings">
            <ContentContainer>
                <form onSubmit={handleSubmit}>
                    {fields}
                    {fields.length > 0 && <button>Save</button>}
                </form>
            </ContentContainer>
        </ViewWrapper>
    )
}

export default SettingsView
