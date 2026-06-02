import { z } from 'zod'

export const AssistantDefinitionSchema = z.object({
  key: z.string(),
  label: z.string(),
  description: z.string(),
  domain: z.string(),
  allowedActions: z.array(
    z.enum(['move_stage', 'create_internal_note', 'request_client_info', 'apply_tag']),
  ),
})

export type AssistantDefinition = z.infer<typeof AssistantDefinitionSchema>
