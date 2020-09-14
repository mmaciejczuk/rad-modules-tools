[@tshio/security-client](../README.md) › [Globals](../globals.md) › [BadRequest](badrequest.md)

# Class: BadRequest

## Hierarchy

  ↳ [HttpErrorBase](httperrorbase.md)

  ↳ **BadRequest**

## Implements

* [HttpErrorDef](../interfaces/httperrordef.md)

## Index

### Constructors

* [constructor](badrequest.md#markdown-header-constructor)

### Properties

* [message](badrequest.md#markdown-header-message)
* [name](badrequest.md#markdown-header-name)
* [stack](badrequest.md#markdown-header-optional-stack)
* [statusCode](badrequest.md#markdown-header-statuscode)
* [title](badrequest.md#markdown-header-title)

## Constructors

###  constructor

\+ **new BadRequest**(`message`: string | null): *[BadRequest](badrequest.md)*

*Inherited from [HttpErrorBase](httperrorbase.md).[constructor](httperrorbase.md#markdown-header-constructor)*

*Defined in [packages/security-client/src/services/http-errors.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/22a789f/packages/security-client/src/services/http-errors.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string &#124; null | null |

**Returns:** *[BadRequest](badrequest.md)*

## Properties

###  message

• **message**: *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[message](../interfaces/httperrordef.md#markdown-header-message)*

*Inherited from [HttpError](../interfaces/httperror.md).[message](../interfaces/httperror.md#markdown-header-message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[name](../interfaces/httperrordef.md#markdown-header-name)*

*Inherited from [HttpError](../interfaces/httperror.md).[name](../interfaces/httperror.md#markdown-header-name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[stack](../interfaces/httperrordef.md#markdown-header-optional-stack)*

*Inherited from [HttpError](../interfaces/httperror.md).[stack](../interfaces/httperror.md#markdown-header-optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  statusCode

• **statusCode**: *number* = 400

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[statusCode](../interfaces/httperrordef.md#markdown-header-statuscode)*

*Overrides [HttpErrorBase](httperrorbase.md).[statusCode](httperrorbase.md#markdown-header-statuscode)*

*Defined in [packages/security-client/src/services/http-errors.ts:35](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/22a789f/packages/security-client/src/services/http-errors.ts#L35)*

___

###  title

• **title**: *string* = "Bad Request"

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[title](../interfaces/httperrordef.md#markdown-header-title)*

*Overrides [HttpErrorBase](httperrorbase.md).[title](httperrorbase.md#markdown-header-title)*

*Defined in [packages/security-client/src/services/http-errors.ts:37](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/22a789f/packages/security-client/src/services/http-errors.ts#L37)*