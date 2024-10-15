import React from 'react';

const EmployeeCard: React.FC<{ name: string; imageSrc: string; description: string }> = ({ name, imageSrc, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <img src={imageSrc} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
    <p className="text-gray-600">{description}</p>
  </div>
);

const Company: React.FC = () => {
  const employees = [
    { name: "John Doe", description: "Senior Developer" },
    { name: "Jane Smith", description: "UX Designer" },
    { name: "Mike Johnson", description: "Project Manager" },
  ];

  const companyLogos = [
    "Company A", "Company B", "Company C", "Company D"
  ];

  return (
    <div className="company-page max-w-7xl mx-auto px-4 py-12">
      {/* Row 1: Employee Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              imageSrc={`https://via.placeholder.com/300x200.png?text=${employee.name.replace(' ', '+')}`}
              description={employee.description}
            />
          ))}
        </div>
      </section>

      {/* Row 2: Company Banner */}
      <section className="mb-16 bg-gray-100 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Trusted by Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companyLogos.map((company, index) => (
            <img 
              key={index} 
              src={`https://via.placeholder.com/150x50.png?text=${company.replace(' ', '+')}`} 
              alt={company} 
              className="h-12 w-auto" 
            />
          ))}
        </div>
      </section>

      {/* Row 3: Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg mb-4">"This company has transformed our business. Highly recommended!"</p>
            <cite className="text-gray-600 block text-right">- John Doe, CEO of Company A</cite>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg mb-4">"Exceptional service and results. We couldn't be happier!"</p>
            <cite className="text-gray-600 block text-right">- Jane Smith, CTO of Company B</cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
