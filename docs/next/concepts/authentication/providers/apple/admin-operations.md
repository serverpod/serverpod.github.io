# Apple admin operations

https://docs.serverpod.dev/next/concepts/authentication/providers/apple/admin-operations

The Apple identity provider exposes admin operations through `AppleIdpAdmin`. Use them from server-side code to check whether Sign in with Apple accounts are still in good standing and to react when Apple has revoked an account.

:::warning
Call these methods only from secure server-side code. Do not expose them through client endpoints without authorization checks.
:::

## Accessing the AppleIdpAdmin

The admin operations are available through `AuthServices.instance.appleIdp` after you add the Apple identity provider (see [setup](https://docs.serverpod.dev/next/concepts/authentication/providers/apple/setup.md#add-the-apple-identity-provider)).

```dart
import 'package:serverpod_auth_idp_server/providers/apple.dart';
import 'package:serverpod_auth_idp_server/core.dart';

final appleIdp = AuthServices.instance.appleIdp;
final admin = appleIdp.admin;
```

## Checking account status

The `checkAccountStatus` method walks Apple accounts that have not been checked in the last 24 hours and validates their stored refresh tokens with Apple. Call it from a scheduled task (for example a [recurring task](https://docs.serverpod.dev/next/concepts/scheduling/recurring-tasks.md)).

When Apple has revoked the authorization, the `onExpiredUserAuthentication` callback receives that user's auth user ID. Revoke every session created through Sign in with Apple for that user.

```dart
await admin.checkAccountStatus(
  session,
  onExpiredUserAuthentication: (authUserId) {
    // Revoke sessions for this auth user.
  },
);
```

The method loads accounts in batches of 100 by default (`databaseBatchSize`).

## Related

- [Setup](https://docs.serverpod.dev/next/concepts/authentication/providers/apple/setup.md): configure Sign in with Apple on the server and in your app.
- [Customizations](https://docs.serverpod.dev/next/concepts/authentication/providers/apple/customizations.md): configuration options and sign-in UI customization.
- [Troubleshooting](https://docs.serverpod.dev/next/concepts/authentication/providers/apple/troubleshooting.md): covers the revoked-notification route, the push counterpart of the polling this page documents.
- [Working with users](https://docs.serverpod.dev/next/concepts/authentication/working-with-users.md): manage auth users and react to account events.
