import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface Employee {
  name: string;
  position: string;
}

const employees: Employee[] = [
  { name: 'John Doe', position: 'Software Engineer' },
  { name: 'Jane Smith', position: 'UX Designer' },
  { name: 'Mike Johnson', position: 'Project Manager' },
];

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PlaceholderImage } from 'react-placeholder-image';

interface Employee {
  name: string;
  position: string;
}

const employees: Employee[] = [
  { name: 'John Doe', position: 'Software Engineer' },
  { name: 'Jane Smith', position: 'UX Designer' },
  { name: 'Mike Johnson', position: 'Project Manager' },
];

const EmployeeSummary: React.FC = () => {
  return (
    <div>
      <header className="relative mb-8">
        <StaticImage
          src="../images/zen-garden.jpg"
          alt="Zen Garden"
          className="w-full h-64"
          layout="fullWidth"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Team</h1>
        </div>
      </header>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {employees.map((employee, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <PlaceholderImage
                  width={200}
                  height={200}
                  text={`${employee.name[0]}${employee.name.split(' ')[1][0]}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-center text-gray-800">
                  {employee.name}
                </h2>
                <p className="text-center text-gray-600">
                  {employee.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeSummary;
