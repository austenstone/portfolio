import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  name = 'Austen Stone';
  title = 'Solutions Engineer';
  description = '';
  workExperiences = [{
    title: 'Solutions Expert',
    name: 'Telit',
    dateStart: new Date('Jan 1, 2021'),
    dateEnd: null,
    // description: 'worked here',
    bullets: [
      'Creator of deviceWISE View, a drag/drop dashboard builder that has generated over $1m+ in revenue.',
      'Gathered requirments and created proposals for clients outlining project scope and timeline.',
      'Developed internal applications to evolve our processes and increase productivity.',
      'Researched and studied new concepts and directed development to provide better solutions to customers.'
    ]
  }, {
    title: 'Solutions Engineer',
    name: 'Telit',
    dateStart: new Date('April 1, 2018'),
    dateEnd: new Date('Jan 1, 2021'),
    bullets: [
      'Creator of industrial C drivers such as FANUC CNC, CAN Bus, Modbus, TCP, etc.',
      'Creator of C extensions such as Siemens Mindsphere, Azure IoT Hub, AWS Sitewise, AWS IoT Core, IBM Maximo, etc.',
      'Designed and delivered solutions from idea to dll. Worked with customers and debugged problems in the real world.'
    ]
  }, {
    title: 'Engineer Intern',
    name: 'Telit',
    dateStart: new Date('October 1, 2016'),
    dateEnd: new Date('April 1, 2018'),
    // description: 'worked here'
  }, {
    title: 'Owner',
    name: 'Austen Stone Tech',
    dateStart: new Date('January 1, 2013'),
    dateEnd: new Date('January 1, 2019'),
    bullets: [
      'Custom software solutions, mostly websites.',
      '20+ satisfied clients.',
    ]
  }, {
    title: 'IT & Computer Graphics Specialist',
    name: 'JRPR Public Relations',
    dateStart: new Date('August 1, 2013'),
    dateEnd: new Date('December 1, 2016'),
    bullets: [
      'Transformed the JRPR’s “traditional” marketing strategy to incorporate modern techniques and automate processes.',
      'Improved existing services and incorporated new ones such as web development, graphic design, social media, and more.',
      'Managed and lead PR team on technology projects.',
      'Created custom websites for clients.'
    ]
  }]

  constructor() { }

  ngOnInit() {
  }

}
