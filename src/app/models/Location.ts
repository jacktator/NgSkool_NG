/**
 * Data Model class for 'Location' object.
 *
 * @todo Convert data usage of interface into class.
 * E.g. Instead of using List<LocationInterface> into List<LocationClass>
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
