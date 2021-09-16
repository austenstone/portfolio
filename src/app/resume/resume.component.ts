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
    title: 'Solutions Expert',
    name: 'Telit',
    href: 'https://www.telit.com/',
    dateStart: new Date('Dec 1, 2020'),
    dateEnd: null,
    bullets: [
      'Creator of deviceWISE View, a drag/drop dashboard builder that has generated over $1m+ in revenue.',
      'Worked collaboratively with the open source community on GitHub and Stackoverflow to add features or solve issues in third party libraries.',
      'Gathered requirements and created proposals for clients outlining project scope and timeline.',
      'Developed internal applications to evolve our processes and increase productivity such as a License Server, Tunneling Client, and modern CI/CD pipelines.',
      'Worked between product management, developers, and sales team to solve problems and prioritize work.',
      'Successfully delivered 100s of live demonstrations to customers.'
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
    dateEnd: new Date('January 1, 2019'),
    bullets: [
      'Custom software solutions. 20+ satisfied clients.',
    ]
  }, {
    title: 'IT & Computer Graphics Specialist',
    name: 'JRPR Public Relations',
    dateStart: new Date('August 1, 2013'),
    dateEnd: new Date('December 1, 2016'),
    bullets: [
      'Transformed the JRPR’s “traditional” marketing strategy to incorporate modern techniques and automate processes.',
      'Improved existing services and incorporated new ones such as web development, graphic design, social media, and more.',
      // 'Managed and lead PR team on technology projects.',
      // 'Created custom websites for clients.'
    ]
  }]

  constructor() { }
}
