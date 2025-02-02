import { Building } from 'lucide-react';

export const Companies = ({ companiesString }) => {
  const processedCompanies =
    companiesString?.match(/@\w[\w-]*/g)?.map((name) => name.slice(1)) ?? null;

  return (
    processedCompanies && (
      <div className='flex justify-center items-center'>
        <Building className='w-4 h-4 mr-1 text-gray-500' />
        {processedCompanies.map((company, index) => (
          <a
            href={`https://github.com/${company}`}
            className='hover:underline mr-1'
          >
            @{company}
          </a>
        ))}
      </div>
    )
  );
};
