export enum MUTATION_KEY {
  ACCOUNT_ADD_USER = 'ACCOUNT/ADD_USER',
  ACCOUNT_CHANGE_PASSWORD = 'ACCOUNT/ADD_USER',
  ACCOUNT_EDIT_PERMISSION = 'ACCOUNT/EDIT_PERMISSION',
  AUTH_LOGIN = 'AUTH/LOGIN',
  AUTH_LOGOUT = 'AUTH/LOGOUT',
  AUTH_REISSUE_TOKEN = 'AUTH/REISSUE_TOKEN',
  CONFIGURE_TEST_CRAS_SERVER = 'CONFIGURE/TEST_CRAS_SERVER',
  CONFIGURE_TEST_EMAIL_SERVER = 'CONFIGURE/TEST_EMAIL_SERVER',
  CONFIGURE_TEST_RAPID_COLLECTOR_SERVER = 'CONFIGURE/TEST_RAPID_COLLECTOR_SERVER',
  CONFIGURE_ADD_SITE = 'CONFIGURE/ADD_SITE',
  CONFIGURE_EDIT_SITE = 'CONFIGURE/EDIT_SITE',
  ADDRESS_ADD_EDIT_EMAIL = 'ADDRESS/ADD_EDIT_EMAIL',
  ADDRESS_ADD_EDIT_GROUP = 'ADDRESS/ADD_EDIT_GROUP',
  ADDRESS_DELETE_GROUP = 'ADDRESS/DELETE_GROUP',
  ADDRESS_SEARCH_EMAIL = 'ADDRESS/SEARCH_EMAIL',
  ADDRESS_SEARCH_EMAIL_GROUP = 'ADDRESS/SEARCH_EMAIL_GROUP',
  ADDRESS_DELETE_EMAIL = 'ADDRESS/DELETE_EMAIL',

  RULES_CRAS_ADD_SITE = 'RULES/CRAS/ADD_SITE',
  RULES_CRAS_DELETE = 'RULES/CRAS/DELETE',
  RULES_CRAS_IMPORT_FILE = 'RULES/CRAS/IMPORT_FILE',
  RULES_CRAS_CREATE_TEST_QUERY = 'RULES/CRAS/CREATE/TEST_QUERY',
  RULES_CRAS_CREATE_ADD = 'RULES/CRAS/CREATE/ADD',
  RULES_CRAS_CREATE_EDIT = 'RULES/CRAS/CREATE/EDIT',
  RULES_CRAS_CREATE_DELETE = 'RULES/CRAS/CREATE/DELETE',
  RULES_CRAS_JUDGE_ADD = 'RULES/CRAS/JUDGE/ADD',
  RULES_CRAS_JUDGE_EDIT = 'RULES/CRAS/JUDGE/EDIT',
  RULES_CRAS_JUDGE_DELETE = 'RULES/CRAS/JUDGE/DELETE',

  RULES_CONVERT_PREVIEW_SAMPLE = 'RULES/CONVERT/PREVIEW/SAMPLE',
  RULES_CONVERT_PREVIEW_CONVERT = 'RULES/CONVERT/PREVIEW/CONVERT',
  RULES_CONVERT_PREVIEW_FILTER = 'RULES/CONVERT/PREVIEW/FILTER',
  RULES_CONVERT_ADD_LOG = 'RULES/CONVERT/ADD_LOG',
  RULES_CONVERT_EDIT_LOG = 'RULES/CONVERT/EDIT_LOG',
  RULES_CONVERT_DELETE_LOG = 'RULES/CONVERT/DELETE_LOG',
  RULES_CONVERT_OPTION = 'RULES/CONVERT/OPTION',
  RULES_CONVERT_ADD_RULE = 'RULES/CONVERT/ADD_RULE',
  RULES_CONVERT_EDIT_RULE = 'RULES/CONVERT/EDIT_RULE',
  RULES_CONVERT_IMPORT_FILE = 'RULES/CONVERT/IMPORT_FILE',

  ERROR_LOG_DOWNLOAD = 'ERROR_LOG/DOWNLOAD',
  ERROR_LOG_IMPORT = 'ERROR_LOG/IMPORT',

  JOB_REMOTE_ADD = 'JOB/REMOTE/ADD',
  JOB_REMOTE_EDIT = 'JOB/REMOTE/EDIT',

  JOB_LOCAL_ADD = 'JOB/LOCAL/ADD',
}
