import React from 'react';
import { User } from 'lucide-react';

interface Employee {
  name: string;
  position: string;
  image: string;
}

const employees: Employee[] = [
  { name: 'John Doe', position: 'Software Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { name: 'Jane Smith', position: 'UX Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  { name: 'Mike Johnson', position: 'Project Manager', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
];

const EmployeeSummary: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-stone-100 to-stone-200 relative">
      <div className="absolute inset-0 bg-opacity-5 bg-emerald-500 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-24 relative">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1464982326199-86f32f81b211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              filter: 'brightness(0.7)'
            }}
          ></div>
          <h2 className="text-5xl font-bold text-center py-24 text-white font-sans tracking-tight relative z-10">
            Meet Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {employees.map((employee, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-500 transform hover:-translate-y-4 hover:rotate-1">
              <div className="p-8">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center text-stone-800 mb-2">
                  {employee.name}
                </h3>
                <p className="text-center text-stone-600 font-light text-lg">
                  {employee.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeSummary;
