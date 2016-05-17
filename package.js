Package.describe({
  name: 'hirespace:codegen',
  version: '0.1.0',
  summary: 'Generate unique human readable codes (e.g. vouchers, referrals, passwords, keys)',
  git: 'https://github.com/hirespace/codegen',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'dist/lib/codegen.js'
  ]);

  api.export('Codegen');
});
