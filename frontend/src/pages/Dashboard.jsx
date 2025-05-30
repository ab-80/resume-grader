import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">Resume Grader</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h2>
            
            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Upload Resume Card */}
              <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Resume</h3>
                <p className="text-gray-600 mb-4">Upload your resume to get started with the grading process.</p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Upload
                </button>
              </div>

              {/* Recent Grades Card */}
              <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Grades</h3>
                <p className="text-gray-600 mb-4">View your recently graded resumes and feedback.</p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  View Grades
                </button>
              </div>

              {/* Profile Settings Card */}
              <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Settings</h3>
                <p className="text-gray-600 mb-4">Manage your account settings and preferences.</p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;