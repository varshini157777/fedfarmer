import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.jsx';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'farmer',
    location: '',
    organicCertified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const user = await register(form);
      if (user.role === 'farmer') navigate('/farmer/dashboard');
      else if (user.role === 'buyer') navigate('/buyer/dashboard');
      else if (user.role === 'admin') navigate('/admin/dashboard');
      else navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h1>
      <p className="text-sm text-gray-600 mb-6">
        Join AgriValue Hub as a farmer, buyer, or admin and start collaborating.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        {error && <p className="text-[11px] text-red-600 mb-1">{error}</p>}
        <div className="text-xs font-medium text-gray-700 mb-1">Role</div>
        <div className="flex gap-2 text-xs mb-3">
          {['farmer', 'buyer', 'admin'].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, role }))}
              className={`flex-1 rounded-full border px-3 py-2 capitalize ${
                form.role === role
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 text-gray-600'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-xs font-medium text-gray-700">Full name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-xs font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-xs font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block text-xs font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        {form.role === 'farmer' && (
          <label className="flex items-center gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              name="organicCertified"
              checked={form.organicCertified}
              onChange={handleChange}
              className="h-3 w-3 rounded border-gray-300"
            />
            Organic certified producer
          </label>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 disabled:opacity-60"
        >
          {submitting ? 'Creating account...' : 'Create account'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
