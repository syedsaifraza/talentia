'use client';

import { useState } from 'react';

type SettingOption = {
  label: string;
  description: string;
  icon: string;
};

type SettingCategory = {
  category: string;
  options: SettingOption[];
};

const settingsOptions: SettingCategory[] = [
  {
    category: 'Notifications',
    options: [
      {
        label: 'Push Notifications',
        description:
          'Receive real-time push alerts on your devices whenever there’s a new activity, message, or update related to your account. You can turn it off to reduce distractions.',
        icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827392.png',
      },
      {
        label: 'Email Alerts',
        description:
          'Get periodic updates and notifications via email for things like security alerts, friend requests, and comments.',
        icon: 'https://cdn-icons-png.flaticon.com/512/561/561127.png',
      },
      {
        label: 'SMS Alerts',
        description:
          'Receive text message notifications about important account events, such as logins or password changes.',
        icon: 'https://cdn-icons-png.flaticon.com/512/726/726623.png',
      },
    ],
  },
  {
    category: 'Privacy',
    options: [
      {
        label: 'Blocked Users',
        description:
          "Manage your blocked list. Blocked users can't see your posts, tag you, or message you. You can unblock them anytime.",
        icon: 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png',
      },
      {
        label: 'Who can see your posts',
        description:
          'Control the audience for your future posts. You can allow friends, specific people, or make them public.',
        icon: 'https://cdn-icons-png.flaticon.com/512/929/929432.png',
      },
    ],
  },
];

export default function Settings() {
  const [selectedSetting, setSelectedSetting] = useState<SettingOption | null>(null);
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});
  const [message, setMessage] = useState<string>('');

  const handleToggle = (label: string) => {
    setToggleStates((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSave = () => {
    setMessage('Your settings have been saved!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-4  w-full max-w-[1200px] mx-auto">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-2xl p-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        {settingsOptions.map((section, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{section.category}</h3>
            <ul className="space-y-1">
              {section.options.map((option, j) => (
                <li
                  key={j}
                  className={`p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                    selectedSetting?.label === option.label ? 'bg-blue-100 text-blue-600' : ''
                  }`}
                  onClick={() => setSelectedSetting(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Details Panel */}
      <div className="w-full md:flex-1 bg-white shadow-md rounded-2xl p-6">
        {selectedSetting ? (
          <>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedSetting.icon}
                alt={selectedSetting.label}
                className="w-14 h-14"
              />
              <h2 className="text-2xl font-bold">{selectedSetting.label}</h2>
            </div>
            <p className="text-gray-600 mb-6">{selectedSetting.description}</p>

            {/* Toggle */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-md font-medium">
                Enable {selectedSetting.label}
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={!!toggleStates[selectedSetting.label]}
                  onChange={() => handleToggle(selectedSetting.label)}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full shadow-inner relative transition-all">
                  <div
                    className={`absolute w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                      toggleStates[selectedSetting.label] ? 'translate-x-5' : 'translate-x-1'
                    }`}
                  />
                </div>
              </label>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Save
            </button>
            {message && <p className="text-green-600 mt-4">{message}</p>}
          </>
        ) : (
          <p className="text-gray-600">
            Select any option from the left menu to view and modify settings.
          </p>
        )}
      </div>
    </div>
  );
}
