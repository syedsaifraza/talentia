"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    bio: "Software developer passionate about creating amazing user experiences",
    location: "New York, USA",
    website: "https://johndoe.com",
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showLocation: true,
    allowMessages: true,
    allowTagging: true,
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    messageNotifications: true,
    followNotifications: true,
    likeNotifications: false,
    commentNotifications: true,
  })

  const handleSave = () => {
    console.log("Settings saved")
    alert("Settings saved successfully!")
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePrivacyToggle = (field: string) => {
    setPrivacySettings((prev) => ({ ...prev, [field]: !prev[field as keyof typeof prev] }))
  }

  const handleNotificationToggle = (field: string) => {
    setNotificationSettings((prev) => ({ ...prev, [field]: !prev[field as keyof typeof prev] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="space-y-6">
          
        
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Privacy Settings
              </h2>
              <p className="text-gray-600 text-sm mt-1">Control who can see your information and interact with you</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label htmlFor="profileVisibility" className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Visibility
                </label>
                <select
                  id="profileVisibility"
                  value={privacySettings.profileVisibility}
                  onChange={(e) => setPrivacySettings({ ...privacySettings, profileVisibility: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </select>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-4">
                {[
                  { key: "showEmail", label: "Show Email Address", desc: "Allow others to see your email address" },
                  { key: "showLocation", label: "Show Location", desc: "Display your location on your profile" },
                  {
                    key: "allowMessages",
                    label: "Allow Direct Messages",
                    desc: "Let others send you private messages",
                  },
                  { key: "allowTagging", label: "Allow Tagging", desc: "Allow others to tag you in posts" },
                ].map((setting) => (
                  <div key={setting.key} className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">{setting.label}</label>
                      <p className="text-sm text-gray-500">{setting.desc}</p>
                    </div>
                    <button
                      onClick={() => handlePrivacyToggle(setting.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        privacySettings[setting.key as keyof typeof privacySettings] ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          privacySettings[setting.key as keyof typeof privacySettings]
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h8v-2H4v2zM4 11h10V9H4v2z"
                  />
                </svg>
                Notification Preferences
              </h2>
              <p className="text-gray-600 text-sm mt-1">Choose what notifications you want to receive</p>
            </div>
            <div className="p-6 space-y-4">
              {[
                { key: "emailNotifications", label: "Email Notifications", desc: "Receive notifications via email" },
                {
                  key: "pushNotifications",
                  label: "Push Notifications",
                  desc: "Receive push notifications on your device",
                },
                {
                  key: "messageNotifications",
                  label: "New Messages",
                  desc: "Get notified when you receive new messages",
                },
                { key: "followNotifications", label: "New Followers", desc: "Get notified when someone follows you" },
                { key: "likeNotifications", label: "Likes", desc: "Get notified when someone likes your posts" },
                {
                  key: "commentNotifications",
                  label: "Comments",
                  desc: "Get notified when someone comments on your posts",
                },
              ].map((setting) => (
                <div key={setting.key} className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">{setting.label}</label>
                    <p className="text-sm text-gray-500">{setting.desc}</p>
                  </div>
                  <button
                    onClick={() => handleNotificationToggle(setting.key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      notificationSettings[setting.key as keyof typeof notificationSettings]
                        ? "bg-blue-600"
                        : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notificationSettings[setting.key as keyof typeof notificationSettings]
                          ? "translate-x-6"
                          : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Account Settings
              </h2>
              <p className="text-gray-600 text-sm mt-1">Manage your account security and preferences</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Change Password</label>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Update Password
                </button>
              </div>

              <hr className="border-gray-200" />

              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Enable 2FA
                </button>
              </div>

              <hr className="border-gray-200" />

              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Download Your Data</label>
                  <p className="text-sm text-gray-500">Download a copy of your data</p>
                </div>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Request Data
                </button>
              </div>

              <hr className="border-gray-200" />

              <div>
                <label className="block text-sm font-medium text-red-600 mb-2">Danger Zone</label>
                <button className="px-4 py-2 border border-red-200 rounded-md text-sm font-medium text-red-600 hover:bg-red-50">
                  Deactivate Account
                </button>
                <p className="text-sm text-gray-500 mt-1">Temporarily disable your account</p>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
