import { CustomException } from './custom.exception';

export function DbException(Err: any, nameEntity: string) {
  let message = '';
  switch (Err.code) {
    case 'ER_DUP_ENTRY':
      message = 'Sql Key Duplicada en ' + nameEntity;
      break;
    default:
      message = 'Not found';
      break;
  }

  throw new CustomException(message);
}
