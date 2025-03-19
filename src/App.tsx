import { Navigate, Route, Routes } from 'react-router-dom';
import { MainRouteSlug, SubpathSlug } from './pages';
import { LayoutWrapper } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/dashboard" element={<MainRouteSlug title="Dashboard" />} />
          <Route path="/history" element={<MainRouteSlug title="History" />} />
          <Route path="/employees" element={<MainRouteSlug title="Employees" />} />
          <Route path="/visitors" element={<MainRouteSlug title="Visitors" />} />
          <Route path="/students" element={<MainRouteSlug title="Students" />} />
          <Route path="/groups" element={<MainRouteSlug title="Groups" />} />
          <Route path="/professors" element={<MainRouteSlug title="Professors" />} />

          <Route path="/dashboard/overview" element={<SubpathSlug title="Overview" />} />
          <Route path="/dashboard/analytics" element={<SubpathSlug title="Analytics" />} />
          <Route path="/history/transactions" element={<SubpathSlug title="Transaction History" />} />
          <Route path="/history/logins" element={<SubpathSlug title="Login History" />} />
          <Route path="/employees/all" element={<SubpathSlug title="All Employees" />} />
          <Route path="/employees/departments" element={<SubpathSlug title="Departments" />} />
          <Route path="/visitors/logs" element={<SubpathSlug title="Visitor Logs" />} />
          <Route path="/visitors/new" element={<SubpathSlug title="New Visitors" />} />
          <Route path="/students/all" element={<SubpathSlug title="All Students" />} />
          <Route path="/students/enrollments" element={<SubpathSlug title="Enrollments" />} />
          <Route path="/professors/all" element={<SubpathSlug title="All Professors" />} />
          <Route path="/professors/departments" element={<SubpathSlug title="Departments" />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
