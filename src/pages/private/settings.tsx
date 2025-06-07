import { useState } from "react";

function Settings() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { id: 0, label: 'General' },
    { id: 1, label: 'Preferences' },
    { id: 2, label: 'Notification' },
    { id: 3, label: 'Account' },
    { id: 4, label: 'User Permissions' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-surface-900">Settings</h1>
          <div className="flex items-center space-x-3">
            <button className="border border-surface-300 hover:border-surface-400 text-surface-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
              Cancel
            </button>
            <button className="bg-primary hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-surface-200 grid grid-cols-1 lg:grid-cols-4 min-h-[600px] overflow-hidden">
        <div className="bg-surface-50 p-6 border-r border-surface-200">
          <nav className="space-y-2">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => setTab(tabItem.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  tab === tabItem.id
                    ? "bg-primary text-white shadow-md"
                    : "text-surface-700 hover:bg-surface-100 hover:text-surface-900"
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-3 p-6">
          {tab === 0 && (
            <div className="space-y-6">
              <div className="border-b border-surface-200 pb-4">
                <h3 className="text-xl font-bold text-surface-900">General</h3>
                <p className="text-surface-600 mt-1">Update your hospital information</p>
              </div>

              <div className="flex items-start space-x-6">
                <div className="h-20 w-20 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <button className="text-primary hover:text-primary-700 font-medium text-sm">Upload Logo</button>
                    <button className="text-error hover:text-red-700 font-medium text-sm">Delete</button>
                  </div>
                  <p className="text-sm text-surface-600 max-w-md">Upload your hospital logo for better branding</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Hospital Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter hospital name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Hospital Type</label>
                  <select className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors">
                    <option>General Hospital</option>
                    <option>Specialty Hospital</option>
                    <option>Teaching Hospital</option>
                    <option>Clinic</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-surface-200 pt-6">
                <h4 className="font-semibold text-surface-900 mb-4">Location Information</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-2">Country</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Enter country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-2">State/Province</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Enter state or province"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Enter city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-2">Street Address</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                      placeholder="Enter street address"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div className="space-y-6">
              <div className="border-b border-surface-200 pb-4">
                <h3 className="text-xl font-bold text-surface-900">Preferences</h3>
                <p className="text-surface-600 mt-1">Customize your application preferences</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-surface-900">Dark Mode</h4>
                    <p className="text-sm text-surface-600">Switch to dark theme</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-surface-300 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div className="space-y-6">
              <div className="border-b border-surface-200 pb-4">
                <h3 className="text-xl font-bold text-surface-900">Notifications</h3>
                <p className="text-surface-600 mt-1">Choose how you want to be notified</p>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'Email Notifications', desc: 'Receive email updates for important events' },
                  { title: 'SMS Alerts', desc: 'Get text messages for urgent matters' },
                  { title: 'Desktop Notifications', desc: 'Show browser notifications' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-surface-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-surface-900">{item.title}</h4>
                      <p className="text-sm text-surface-600">{item.desc}</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 3 && (
            <div className="space-y-6">
              <div className="border-b border-surface-200 pb-4">
                <h3 className="text-xl font-bold text-surface-900">Account</h3>
                <p className="text-surface-600 mt-1">Manage your personal account information</p>
              </div>

              <div className="flex items-start space-x-6">
                <div className="h-20 w-20 bg-gradient-to-br from-secondary to-secondary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">XT</span>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <button className="text-primary hover:text-primary-700 font-medium text-sm">Upload Photo</button>
                    <button className="text-error hover:text-red-700 font-medium text-sm">Delete</button>
                  </div>
                  <p className="text-sm text-surface-600 max-w-md">Upload your profile picture</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-colors"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="border-t border-surface-200 pt-6">
                <div className="bg-error/5 border border-error/20 rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-error mb-2">Delete Account</h4>
                      <p className="text-sm text-surface-600">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                    <button className="bg-error hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 4 && (
            <div className="space-y-6">
              <div className="border-b border-surface-200 pb-4">
                <h3 className="text-xl font-bold text-surface-900">User Permissions</h3>
                <p className="text-surface-600 mt-1">Manage user roles and permissions</p>
              </div>
              <div className="text-surface-600">
                <p>User permission management interface will be implemented here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
