const PromptPresetType = {
  PLAIN: 'PLAIN',
  JAILBREAK: 'JAILBREAK',
  CHAT_HISTORY: 'CHAT_HISTORY',
  PERSONA: 'PERSONA',
  CHARACTER: 'CHARACTER',
  WRITERS_NOTE: 'WRITERS_NOTE',
  LOREBOOK: 'LOREBOOK',
  MEMORY: 'MEMORY',
  FINAL: 'FINAL',
} as const

const PromptRole = {
  USER: 'USER',
  CHARACTER: 'CHARACTER',
  SYSTEM: 'SYSTEM',
} as const

export interface BasePromptPreset {
  name: string
  type: keyof typeof PromptPresetType
  role?: keyof typeof PromptRole
}

export interface PlainPreset extends BasePromptPreset {
  type: typeof PromptPresetType.PLAIN
  content: string
}

export interface JailbreakPreset extends BasePromptPreset {
  type: typeof PromptPresetType.JAILBREAK
  content: string
  /// @role SYSTEM
}

export interface ChatHistoryPreset extends BasePromptPreset {
  type: typeof PromptPresetType.CHAT_HISTORY
  interval?: [number, number | null]
}

export interface PersonaPreset extends BasePromptPreset {
  type: typeof PromptPresetType.PERSONA
  content?: string
  /// @role SYSTEM
}

export interface CharacterPreset extends BasePromptPreset {
  type: typeof PromptPresetType.CHARACTER
  content?: string
  /// @role SYSTEM
}

export interface WritersNotePreset extends BasePromptPreset {
  type: typeof PromptPresetType.WRITERS_NOTE
  /// @role SYSTEM
}

export interface LorebookPreset extends BasePromptPreset {
  type: typeof PromptPresetType.LOREBOOK
  /// @role SYSTEM
}

export interface MemoryPreset extends BasePromptPreset {
  type: typeof PromptPresetType.MEMORY
  content?: string
  /// @role SYSTEM
}

export interface FinalPreset extends BasePromptPreset {
  type: typeof PromptPresetType.FINAL
  /// @role USER
}

export const defaultRoles = {
  [PromptPresetType.PLAIN]: PromptRole.SYSTEM,
  [PromptPresetType.JAILBREAK]: PromptRole.SYSTEM,
  [PromptPresetType.CHAT_HISTORY]: PromptRole.SYSTEM,
  [PromptPresetType.PERSONA]: PromptRole.SYSTEM,
  [PromptPresetType.CHARACTER]: PromptRole.SYSTEM,
  [PromptPresetType.WRITERS_NOTE]: PromptRole.SYSTEM,
  [PromptPresetType.LOREBOOK]: PromptRole.SYSTEM,
  [PromptPresetType.MEMORY]: PromptRole.SYSTEM,
  [PromptPresetType.FINAL]: PromptRole.USER,
} as const satisfies Record<keyof typeof PromptPresetType, keyof typeof PromptRole>

export type PromptPreset =
  PlainPreset
  | JailbreakPreset
  | ChatHistoryPreset
  | PersonaPreset
  | CharacterPreset
  | WritersNotePreset
  | LorebookPreset
  | MemoryPreset
  | FinalPreset

export type PromptPresetSchema = {
  $schema: string
  name: string
  content: PromptPreset[]
}