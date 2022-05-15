import {Question} from '../types/questions.type'

export const questions: Question[] = [
  {
    question:
      'Which of the statements below is accurate regarding Amazon S3 buckets? (Select TWO.)',
    choices: [
      'Buckets are region-specific',
      'Bucket names must be unique globally: correct option',
      'Buckets are replicated globally',
      'Buckets can contain other buckets',
      'Bucket names must be unique regionally',
    ],
    answers: ['Bucket names must be unique globall'],
  },

  {
    question:
      'Which AWS storage technology can be considered a “virtual hard disk in the cloud”?',
    choices: [
      'Amazon Glacier archive',
      'Amazon S3 object',
      'Amazon Elastic Block Storage (EBS) volume',
      'Amazon Elastic File Storage (EFS) filesystem',
    ],
    answers: ['Amazon Elastic Block Storage (EBS) volume'],
  },
  {
    question:
      'An application stores images which will be retrieved infrequently, but must be available for retrieval immediately. Which is the most cost-effective storage option that meets these requirements?',
    choices: [
      'Amazon EFS',
      'Amazon S3 Standard-Infrequent Access',
      'Amazon S3 Standard',
      'Amazon Glacier with expedited retrievals',
    ],
    answers: ['Amazon S3 Standard-Infrequent Access'],
  },
  {
    question:
      'Which items can be configured from within the VPC management console? (Select TWO.)',
    choices: [
      'Auto Scaling',
      ' Load Balancing',
      'Security Groups',
      'Subnets',
      'Regions',
    ],
    answers: ['Security Groups', 'Subnets'],
  },
  {
    question: 'What is the scope of a VPC within a region?',
    choices: [
      'Spans all Availability Zones globally',
      'At least 2 data centers per region',
      'Spans all Availability Zones within the region',
      'At least 2 subnets per region',
    ],
    answers: ['Spans all Availability Zones within the region'],
  },
  {
    question:
      'Which statement below is incorrect in relation to Security Groups?',
    choices: [
      'They evaluate all rules before making a decision',
      'They support allow rules only',
      'They are stateless',
      'They operate at the instance level',
    ],
    answers: ['They are stateless'],
  },

  {
    question:
      'Which statement below is incorrect in relation to Network ACLs?',
    choices: [
      'They are stateless',
      'They operate at the Availability Zone level',
      'They process rules in order',
      'They support allow and deny rules',
    ],
    answers: ['They operate at the Availability Zone level'],
  },
  {
    question:
      'Which AWS construct provides you with your own dedicated virtual network in the cloud?',
    choices: ['Amazon IAM', 'Amazon EC2,', 'Amazon VPC', 'Amazon Workspaces'],
    answers: ['Amazon VPC'],
  },
]