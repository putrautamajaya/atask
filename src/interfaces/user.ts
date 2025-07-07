// Shared sub‐type for both schemas
export interface Plan {
  collaborators: number;
  name: string;
  space: number;
  private_repos: number;
}

// “OneOf” union
export type User = PrivateUser | PublicUser;

// ─────────────────────────────────────────────────────
// 1) PrivateUser
// All properties in “required” are non‐optional; others get “?”
// ─────────────────────────────────────────────────────
export interface PrivateUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;

  // nullable in schema but required
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  notification_email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;

  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;

  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;

  // required object
  plan: Plan;

  // these were in `properties` but not in `required`
  user_view_type?: string;
  business_plus?: boolean;
  ldap_dn?: string;
}

// ─────────────────────────────────────────────────────
// 2) PublicUser
// Same mapping of required vs optional
// ─────────────────────────────────────────────────────
export interface PublicUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;

  // nullable in schema but required
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;

  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;

  // these are in `properties` but *not* in `required`
  user_view_type?: string;
  notification_email?: string | null;
  hireable?: boolean | null;
  twitter_username?: string | null;
  plan?: Plan;
  private_gists?: number;
  total_private_repos?: number;
  owned_private_repos?: number;
  disk_usage?: number;
  collaborators?: number;
}
