/**
 * Data Model class for 'Location' object.
 *
 * @author Jacktator
 * @since 1.0.0
 */
export class SKLocation {
  public formatted_address: string;
  public latitude: number;
  public longitude: number;

  constructor(address: string, latitude: number, longitude: number) {
    this.formatted_address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
