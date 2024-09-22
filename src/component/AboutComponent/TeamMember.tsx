import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5k_wGO8rPbykx_g6RE4J7Fj7NOE6fUl5SRTIZsxUq0Cl4-yTavm4NzP5qByMHL7eGONg&usqp=CAU",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJeOvRzDiJYfL46hB3OL_RNChvBAKq9xKtQ&usqp=CAU",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cKsAxp6o_EHUjpKaBWoIpAMIBKWFdiEzGQ&usqp=CAU",
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
        <div className=" lg:flex  md:flex md:justify-center lg:justify-center space-x-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-64 lg:m-0 md:m-0 m-auto mb-9"
            >
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={member.image} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
