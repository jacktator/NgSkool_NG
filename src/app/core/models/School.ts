/**
 * Data Model class for 'School' object.
 *
 * @todo Convert data usage of interface into class. E.g. Instead of using List<SchoolInterface> into List<SchoolClass>
 *
 * @author Jacktator
 * @since 1.0.0
 */

import { SKLocation as Location } from './Location';

export class SKSchool {
  public readonly id: number;
  public _name: string;
  public _location: Location;
  public numberOfStudents: number;

  constructor(name: string, location: Location, numberOfStudents: number) {
    this._name = name;
    this._location = location;
    this.numberOfStudents = numberOfStudents;
  }

  /**
   * Returns the name of 'School' object.
   *
   * @remarks
   * This method is the Getter method for name property.
   *
   * @returns The name of this 'School'
   *
   * @link  https://www.typescriptlang.org/docs/handbook/classes.html
   * @author Jacktator
   * @since 1.0.0
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Sets the name of 'School' object.
   *
   * @remarks
   * This method is the Setter method for name property.
   * This gives you a way of having finer-grained control over how a member is accessed on each object.
   *
   * @param newName the new name for 'School' object.
   *
   * @link  https://www.typescriptlang.org/docs/handbook/classes.html
   * @author Jacktator
   * @since 1.0.0
   */
  public set name(newName: string) {
    if (true === true) {
      // TODO: Fine tune access control for setting name
      this._name = newName;
    } else {
      console.error('Error: Unauthorized update of property: "name" for "School" object.');
    }
  }

  /**
   * Returns the address of 'School' object.
   *
   * For better structure, we wanna make sure address data is formatted into SKLocation.
   *
   * This address property is just a faster way to get to the address string.
   *
   * @remarks
   * This method is the Getter method for 'address' property from 'location'.
   *
   * @link  https://www.typescriptlang.org/docs/handbook/classes.html
   * @author Jacktator
   * @since 1.0.0
   */
  public get address(): String {
    return this._location.formatted_address;
  }
}
