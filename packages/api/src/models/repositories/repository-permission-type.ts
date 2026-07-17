/**
 * Represents the highest level of permission the current user has for a repository.
 */
export enum RepositoryPermissionType {
  /**
   * The user has no permissions for the repository.
   */
  NONE = 'none',

  /**
   * Grants read access to the repository.
   */
  READ = 'read',

  /**
   * Grants read and write access to the repository.
   */
  WRITE = 'write',

  /**
   * Grants full repository manager permissions, including creating,
   * deleting, and managing repositories.
   */
  MANAGER = 'manager',

  /**
   * Grants management access to the repository, including read and
   * write operations, but not creating or deleting repositories.
   */
  MANAGE = 'manage',

  /**
   * Grants permission to execute GraphQL queries.
   */
  GRAPHQL_READ = 'graphql_read',

  /**
   * Grants permission to execute GraphQL queries and mutations.
   */
  GRAPHQL_WRITE = 'graphql_write'
}
