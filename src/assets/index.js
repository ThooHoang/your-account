import vector from './Vector.png';
import vector1 from './Vector-1.png';
import vector2 from './Vector-2.png';
import vector3 from './Vector-3.png';
import vector4 from './Vector-4.png';
import vector5 from './Vector-5.png';
import vector6 from './Vector-6.png';
import vector7 from './Vector-7.png';
import janek from './janek.png';
import background from './background.png';

// Add this function that was being imported but was missing
const assetUrl = (path) => new URL(path, import.meta.url).href;

// Use direct imports to avoid path issues in production
export {
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  vector6,
  vector7,
  janek,
  background,
  assetUrl // Export the function that was missing
};
