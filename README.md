# WhatsApp Notification Action

A GitHub Action to send notifications to a WhatsApp group when a new release is published in your repository. This action fetches the release title and description, and outputs them alongside a WhatsApp group invite link.

## Usage

To use this action in your workflow, add the following to your workflow YAML file:

```yaml
name: Notify WhatsApp on Release

on:
  release:
    types: [published]

jobs:
  notify-whatsapp:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Send WhatsApp Notification
        uses: KnosTx/whatsapp-notification-action@v1
        with:
          whatsapp_invite_link: "https://chat.whatsapp.com/<invite_code>"
```
### Example

This action is triggered when a new release is published. It fetches the release title and description and displays them in the workflow output along with the WhatsApp group invite link.

```yaml
name: Notify WhatsApp on Release

on:
  release:
    types: [published]

jobs:
  notify-whatsapp:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Send WhatsApp Notification
        uses: KnosTx/whatsapp-notification-action@v1
        with:
          whatsapp_invite_link: "https://chat.whatsapp.com/ABC123XYZ456"
```
In this example, when a new release is published, the workflow will trigger and print out:

The release title (or tag name if title is missing)

The release description (or a default message if none is provided)

The WhatsApp group invite link provided in the whatsapp_invite_link input


## Outputs

Currently, this action does not output any additional data beyond console logs.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

