export interface Plan {
  collaborators: number;
  name: string;
  space: number;
  private_repos: number;
}

export interface SimpleUser {
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

  // optional
  name?: string | null;
  email?: string | null;
  starred_at?: string;
  user_view_type?: string;
}

export interface CodeOfConduct {
  key: string;
  name: string;
  url: string;
  html_url: string | null;
  body?: string;
}

export interface License {
  key?: string;
  name?: string;
  spdx_id?: string;
  url?: string;
  node_id?: string;
}

export interface Permissions {
  admin?: boolean;
  maintain?: boolean;
  push?: boolean;
  triage?: boolean;
  pull?: boolean;
}

export interface SecurityAndAnalysisStatus {
  status: "enabled" | "disabled";
}

export interface SecurityAndAnalysis {
  advanced_security?: SecurityAndAnalysisStatus;
  code_security?: SecurityAndAnalysisStatus;
  dependabot_security_updates?: SecurityAndAnalysisStatus;
  secret_scanning?: SecurityAndAnalysisStatus;
  secret_scanning_push_protection?: SecurityAndAnalysisStatus;
  secret_scanning_non_provider_patterns?: SecurityAndAnalysisStatus;
  secret_scanning_ai_detection?: SecurityAndAnalysisStatus;
}

export interface MinimalRepository {
  // required
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: SimpleUser;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  hooks_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;

  // optional
  user_view_type?: string;
  homepage?: string | null;
  mirror_url?: string | null;
  svn_url?: string;
  language?: string | null;
  default_branch?: string;
  open_issues_count?: number;
  watchers_count?: number;
  size?: number;
  allow_forking?: boolean;
  is_template?: boolean;
  topics?: string[];
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_downloads?: boolean;
  has_discussions?: boolean;
  archived?: boolean;
  disabled?: boolean;
  visibility?: string;
  pushed_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  permissions?: Permissions;
  role_name?: string;
  temp_clone_token?: string;
  delete_branch_on_merge?: boolean;
  subscribers_count?: number;
  network_count?: number;
  code_of_conduct?: CodeOfConduct;
  license?: License | null;
  private_gists?: number;
  total_private_repos?: number;
  owned_private_repos?: number;
  disk_usage?: number;
  collaborators?: number;
  security_and_analysis?: SecurityAndAnalysis | null;
  custom_properties?: Record<string, string>;
  stargazers_count?: number;
}

export type RepositoryList = MinimalRepository[];
