import { Question } from '../types/questions.type'

export const questionsSet: Question[] = [
  {
    question:
      'Which of the statements below is accurate regarding Amazon S3 buckets? (Select TWO.)',
    choices: [
      { choice: 'Buckets are region-specific' },
      { choice: 'Bucket names must be unique globally', correct: true },
      { choice: 'Buckets are replicated globally' },
      { choice: 'Buckets can contain other buckets' },
      { choice: 'Bucket names must be unique regionally' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },

  {
    question:
      'Which AWS storage technology can be considered a “virtual hard disk in the cloud”?',
    choices: [
      { choice: 'Amazon Glacier archive' },
      { choice: 'Amazon S3 object' },
      { choice: 'Amazon Elastic Block Storage (EBS) volume', correct: true },
      { choice: 'Amazon Elastic File Storage (EFS) filesystem' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },
  {
    question:
      'An application stores images which will be retrieved infrequently, but must be available for retrieval immediately. Which is the most cost-effective storage option that meets these requirements?',
    choices: [
      { choice: 'Amazon EFS' },
      { choice: 'Amazon S3 Standard-Infrequent Access', correct: true },
      { choice: 'Amazon S3 Standard' },
      { choice: 'Amazon Glacier with expedited retrievals' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },
  {
    question:
      'Which items can be configured from within the VPC management console? (Select TWO.)',
    choices: [
      { choice: 'Auto Scaling' },
      { choice: ' Load Balancing' },
      { choice: 'Security Groups', correct: true },
      { choice: 'Subnets', correct: true },
      { choice: 'Regions' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },
  {
    question: 'What is the scope of a VPC within a region?',
    choices: [
      { choice: 'Spans all Availability Zones globally' },
      { choice: 'At least 2 data centers per region' },
      {
        choice: 'Spans all Availability Zones within the region',
        correct: true,
      },
      { choice: 'At least 2 subnets per region' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },
  {
    question:
      'Which statement below is incorrect in relation to Security Groups?',
    choices: [
      { choice: 'They evaluate all rules before making a decision' },
      { choice: 'They support allow rules only' },
      { choice: 'They are stateless', correct: true },
      { choice: 'They operate at the instance level' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },

  {
    question: 'Which statement below is incorrect in relation to Network ACLs?',
    choices: [
      { choice: 'They are stateless' },
      { choice: 'They operate at the Availability Zone level', correct: true },
      { choice: 'They process rules in order' },
      { choice: 'They support allow and deny rules' },
    ],
    chosenAnswers: [],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
  },
  {
    question:
      'Which AWS construct provides you with your own dedicated virtual network in the cloud?',
    choices: [
      { choice: 'Amazon IAM' },
      { choice: 'Amazon EC2,' },
      { choice: 'Amazon VPC', correct: true },
      { choice: 'Amazon Workspaces' },
    ],
    _id: '5e9f9c8f9c8f9c8f9c8f9c8f',
    chosenAnswers: [],
  },
]
