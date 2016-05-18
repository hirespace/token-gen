Package.describe({
  name: 'hirespace:token-gen',
  version: '0.3.0',
  summary: 'Generate unique human readable codes (e.g. vouchers, referrals, passwords, keys)',
  git: 'https://github.com/hirespace/codegen',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'dist/lib/token-gen.js'
  ]);

  api.export('TokenGen');
});
