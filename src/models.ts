import type { MessageItem, Uri } from "vscode";

export interface UriMessageItem extends MessageItem {
  uri: Uri;
}
