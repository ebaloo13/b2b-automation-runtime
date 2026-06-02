import type { AssistantDefinition } from '../schemas/assistants.js'

const assistants: AssistantDefinition[] = [
  {
    key: 'request-triage',
    label: 'Request Triage',
    description: 'Classifies and routes incoming client requests to the right stage or owner.',
    domain: 'support',
    allowedActions: ['move_stage', 'request_client_info', 'apply_tag'],
  },
  {
    key: 'task-coordinator',
    label: 'Task Coordinator',
    description: 'Tracks task progress, identifies blockers, and suggests next steps.',
    domain: 'operations',
    allowedActions: ['move_stage', 'create_internal_note', 'apply_tag'],
  },
  {
    key: 'client-follow-up',
    label: 'Client Follow-Up',
    description: 'Drafts follow-up messages and suggests when to move or close a request.',
    domain: 'sales',
    allowedActions: ['move_stage', 'request_client_info'],
  },
  {
    key: 'review-prep',
    label: 'Review Prep',
    description: 'Summarizes context and prepares items for human review or sign-off.',
    domain: 'operations',
    allowedActions: ['move_stage', 'create_internal_note'],
  },
  {
    key: 'sales-qualifier',
    label: 'Sales Qualifier',
    description: 'Evaluates lead fit and recommends advancing or disqualifying opportunities.',
    domain: 'sales',
    allowedActions: ['move_stage', 'apply_tag', 'create_internal_note'],
  },
  {
    key: 'collections-followup',
    label: 'Collections Follow-Up',
    description: 'Monitors payment status and suggests follow-up actions for overdue accounts.',
    domain: 'collections',
    allowedActions: ['move_stage', 'request_client_info', 'create_internal_note'],
  },
]

export function listAssistants(): AssistantDefinition[] {
  return assistants
}

export function getAssistantDefinition(key: string): AssistantDefinition | undefined {
  return assistants.find((a) => a.key === key)
}
