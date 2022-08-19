//import { uniqBy } from 'lodash';
import { ClientOptions, SubscriptionClient } from 'subscriptions-transport-ws';

export class AWSSubscriptionClient extends SubscriptionClient {
  constructor(
    url: string,
    options?: ClientOptions,
    webSocketImpl?: any,
    webSocketProtocols?: string | string[]
  ) {
    super(url, options, webSocketImpl, webSocketProtocols);

    // since we are in TS and these functions are private we cannot directly override
    // in this child class so we use this trick (which is not safe) to override
    // the parent functions

    this['flushUnsentMessagesQueue'] = this.flush;
    this['processReceivedData'] = this.process;
  }

  public setUrl(url: string): void {
    super['url'] = url;
  }

  public getUnsentMessagesQueue(): any[] {
    //@ts-ignore
    return this.unsentMessagesQueue || [];
  }

  public setUnsentMessagesQueue(queue: any[]): void {
    //@ts-ignore
    this.unsentMessagesQueue = queue;
  }

  private flush() {
    const messages = this.getUnsentMessagesQueue(); //uniqBy(this.getUnsentMessagesQueue(), 'id');

    messages.forEach((message) => {
      //@ts-ignore
      super.sendMessageRaw(message);
    });
  }

  private process(receivedData: any) {
    try {
      const message = JSON.parse(receivedData);

      // ignore start_ack message from appsync since this isn't
      // treated as a valid gql message type
      if (message.type === 'start_ack') {
        const newQueue = this.getUnsentMessagesQueue().filter(
          (el) => el.id !== message.id
        );

        this.setUnsentMessagesQueue(newQueue);

        return;
      }
      //@ts-ignore
      super.processReceivedData(receivedData);
    } catch (err) {
      // do nothing
    }
  }
}
