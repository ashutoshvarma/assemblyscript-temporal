import { Instant } from "./instant";
import { TimeZone } from "./timezone";

export class ZonedDateTime {
  constructor(public epochNanos: i64, public tz: TimeZone) {}

  toInstant(): Instant {
      return new Instant(this.epochNanos);
  }
}
