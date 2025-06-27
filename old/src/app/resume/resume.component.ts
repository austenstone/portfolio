import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  name = 'Austen Stone';
  title = 'Software Engineer';
  description = 'Passionate developer focused on using cutting edge technology to solve business problems.';
  skills = [
    'C',
    'C++',
    'Typescript',
    'JavaScript',
    'Angular',
    'React',
    'PWAs',
    'Node',
    'Git',
    'Bash',
    'Docker',
    'Electron',
    'Continuous integration',
    'SCM',
    'Object Oriented Design',
    'Deployment'
  ];
  workExperiences = [{
    title: 'Senior Solutions Engineer',
    name: 'GitHub',
    href: 'https://github.com/',
    dateStart: new Date('Mar 1, 2024'),
    dateEnd: null,
    bullets: [
    ]
  }, {
    title: 'Solutions Engineer',
    name: 'GitHub',
    href: 'https://github.com/',
    dateStart: new Date('Jan 11, 2021'),
    dateEnd: new Date('Mar 1, 2024'),
    bullets: [
      'Creator of GitHub Usage Report Viewer, a tool to visualize and analyze GitHub usage data.',
      'Ran GitHub Actions roundtable for 100+ attendees to discuss best practices and new features.',
      'Traveled to multiple hackathons, customer onsites, and conferences to represent GitHub and help developers.',
      'Was GitHub Actions SME for the Solutions Engineering team.',
      'developed internal tools to help the team be more efficient and effective.',
      'Created countless GitHub Actions for customers and the community',
      'FY23 Revenue Club Winner',
      'FY23 Managers Choice Worldwide SE award winner'
    ]
  }, {
    title: 'Solutions Expert',
    name: 'Telit',
    href: 'https://www.telit.com/',
    dateStart: new Date('Dec 1, 2020'),
    dateEnd: new Date('Jan 10, 2021'),
    bullets: [
      'Creator of deviceWISE View, a drag/drop dashboard builder that has generated over $1m+ in revenue.',
      'Worked collaboratively with the open source community on GitHub and Stack Overflow to add features or solve issues in third party libraries.',
      'Gathered requirements and created proposals for clients outlining project scope and timeline.',
      'Developed internal applications to evolve our processes and increase productivity such as a License Server, Tunneling Client, and modern CI/CD pipelines.',
      'Worked between product management, developers, and sales team to solve problems and prioritize work.',
      'Successfully delivered 100s of live demonstrations to customers including IBM, Siemens, Amazon, Dell, Lenovo, Coke, Ford, Honda, Caterpillar, Deloitte, Medtronic, Furuno.'
    ]
  }, {
    title: 'Solutions Engineer',
    name: 'Telit',
    href: 'https://www.telit.com/',
    dateStart: new Date('April 1, 2018'),
    dateEnd: new Date('Dec 1, 2020'),
    bullets: [
      'Creator of industrial C drivers: FANUC CNC, CAN Bus, Modbus, TCP, etc.',
      'Creator of C extensions such as Siemens Mindsphere, Azure IoT Hub, AWS Sitewise, AWS IoT Core, IBM Maximo, etc.',
      'Lead a large scale development for Foxconn to connect and visualize data from entire factory. In-person in Shenzhen, China.',
      'Created and delivered J1939 CANbus solution with AT&T for Halliburton Company USA. Monitor and manage 1000\'s of fracking trucks remotely.',
      'Matched customer problems to product features. Developed missing features by extending or creating new products.',
    ]
  }, {
    title: 'Engineer Intern',
    name: 'Telit',
    href: 'https://www.telit.com/',
    dateStart: new Date('October 1, 2016'),
    dateEnd: new Date('April 1, 2018'),
  }, {
    title: 'Owner',
    name: 'Austen Stone Tech',
    dateStart: new Date('January 1, 2013'),
    dateEnd: new Date('January 1, 2019')
  }, {
    title: 'IT & Computer Graphics Specialist',
    name: 'JRPR Public Relations',
    dateStart: new Date('August 1, 2013'),
    dateEnd: new Date('December 1, 2016')
  }]

  constructor() { }
}
