/**
 * @license
 * Copyright 2025 Intelligent-Internet
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Normalizes tool arguments for Droid compatibility.
 * Fixes field name mismatches between what Gemini generates and what Droid expects.
 */
export function normalizeToolArgs(
  toolName: string,
  args: Record<string, unknown>
): Record<string, unknown> {
  if (toolName === 'TodoWrite') {
    return normalizeTodoWriteArgs(args);
  }
  return args;
}

/**
 * Normalizes TodoWrite tool arguments.
 * - Renames 'task' to 'content' (Gemini uses 'task', Droid expects 'content')
 * - Normalizes status values to valid options
 */
function normalizeTodoWriteArgs(args: Record<string, unknown>): Record<string, unknown> {
  const normalized = { ...args };

  // Handle todos array
  if (Array.isArray(normalized.todos)) {
    normalized.todos = normalized.todos.map((todo: any) => {
      const normalizedTodo = { ...todo };

      // Rename 'task' to 'content' if 'content' doesn't exist
      if (normalizedTodo.task && !normalizedTodo.content) {
        normalizedTodo.content = normalizedTodo.task;
        delete normalizedTodo.task;
      }

      // Also handle 'description' as an alias
      if (normalizedTodo.description && !normalizedTodo.content) {
        normalizedTodo.content = normalizedTodo.description;
        delete normalizedTodo.description;
      }

      // Ensure status is valid
      if (normalizedTodo.status) {
        const validStatuses = ['pending', 'in_progress', 'completed'];
        if (!validStatuses.includes(normalizedTodo.status)) {
          // Map common variations to valid status values
          const statusMap: Record<string, string> = {
            'in-progress': 'in_progress',
            'inprogress': 'in_progress',
            'in progress': 'in_progress',
            'done': 'completed',
            'complete': 'completed',
            'finished': 'completed',
            'todo': 'pending',
            'not_started': 'pending',
            'not-started': 'pending',
            'new': 'pending',
          };
          const lowerStatus = normalizedTodo.status.toLowerCase();
          normalizedTodo.status = statusMap[lowerStatus] || 'pending';
        }
      } else {
        // Default to pending if no status provided
        normalizedTodo.status = 'pending';
      }

      // Ensure priority is valid if present
      if (normalizedTodo.priority) {
        const validPriorities = ['high', 'medium', 'low'];
        if (!validPriorities.includes(normalizedTodo.priority)) {
          const priorityMap: Record<string, string> = {
            'critical': 'high',
            'urgent': 'high',
            'important': 'high',
            'normal': 'medium',
            'default': 'medium',
            'minor': 'low',
          };
          const lowerPriority = normalizedTodo.priority.toLowerCase();
          normalizedTodo.priority = priorityMap[lowerPriority] || 'medium';
        }
      }

      // Ensure id exists
      if (!normalizedTodo.id) {
        normalizedTodo.id = `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      }

      return normalizedTodo;
    });
  }

  return normalized;
}
