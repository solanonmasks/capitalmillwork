// All page copy and photo data, copied from the design prototype.
// Edit text here; the page picks it up on the next build.

export const BUILDS = ['Kitchens', 'Master vanities', 'Theatre rooms', 'Fireplace mantles', 'Reception desks', 'Closets & laundry'];

export const STEPS = [
  { kicker: 'Step one', t: 'Personal consultation', p: ['Every great project begins with a conversation. A member of our team meets you on site for a full walk-through of your space.', 'We learn your design preferences, wants and needs, give expert guidance on a tailored plan, and take precise measurements to start the design.'] },
  { kicker: 'Step two', t: 'Precision 3D design', p: ['We use SketchUp for detailed renderings, followed by Mozaik for CNC operations.', 'You see every proportion, grain orientation, hardware placement and the flow of the space before anything is built, and sign off on every detail with confidence.'] },
  { kicker: 'Step three', t: 'Seamless execution', p: ['Once your millwork is fabricated and finished in our facility, our own in-house installation team takes over. We never outsource installation.', 'Our installers treat your home with respect and fit every cabinet, moulding and piece of hardware with precision.'] }
];

// Photo file names (without .jpg) live in src/assets/photos/.
const P = (f: string, cat: string, label: string) => ({ file: f, cat, label });
export const PHOTOS = [
  P('kitchen-white', 'kitchens', 'White shaker kitchen, marble island'), P('kitchen-modern', 'kitchens', 'Two-tone modern kitchen'), P('k-coffee1', 'kitchens', 'Coffee station with floating oak shelves'), P('k-coffee2', 'kitchens', 'Floating oak shelves'),
  P('bath', 'baths', 'Floating oak double vanity'), P('b-vanity', 'baths', 'Walnut vanity niche'),
  P('m-slat', 'media', 'Oak slat media wall'), P('media-fireplace', 'media', 'Fluted fireplace wall'), P('m-display-wide', 'media', 'Lit display shelving'), P('m-display-close', 'media', 'Lit display shelving'), P('m-display-angle', 'media', 'Lit display shelving'),
  P('m-walnut-shelves', 'media', 'Walnut shelving divider'), P('m-walnut-mirror', 'media', 'Walnut divider with mirror'), P('m-walnut-shelves2', 'media', 'Walnut shelving divider'), P('m-panel', 'media', 'Panelled great room with built-ins'), P('m-panel2', 'media', 'Panelled great room with built-ins'),
  P('m-stone', 'media', 'Stone fireplace with built-ins'), P('m-walnut-white', 'media', 'Walnut and white media wall'), P('m-oak-surround', 'media', 'Oak fireplace surround'), P('m-oak-bookcases', 'media', 'Oak bookcases'), P('m-slate', 'media', 'Built-ins with live-edge mantle'), P('m-white-bookcases', 'media', 'Fireplace bookcases'),
  P('laundry', 'laundry', 'Mudroom and laundry'), P('l-1', 'laundry', 'Two-tone laundry room'), P('l-2', 'laundry', 'Laundry with hanging rail'), P('l-3', 'laundry', 'Walnut laundry uppers'), P('l-4', 'laundry', 'Walnut laundry sink cabinet'), P('l-hamper', 'laundry', 'Tilt-out hamper'),
  P('c-niche', 'closets', 'Entry closets with upholstered bench'), P('c-niche2', 'closets', 'Entry closets with upholstered bench'), P('c-niche3', 'closets', 'Entry closets with upholstered bench'), P('c-mudroom', 'closets', 'Mudroom bench and uppers'), P('c-doors', 'closets', 'Built-in hall closets'),
  P('w-1', 'wine', 'Glass wine wall'), P('w-2', 'wine', 'Diamond wine rack'), P('w-3', 'wine', 'Wine wall with glass doors'), P('w-cellar', 'wine', 'Stone wine cellar'), P('w-bar', 'wine', 'Basement bar'),
  P('o-bunk', 'other', 'Ash bunk beds'), P('o-bookcase', 'other', 'Built-in bookcase'), P('o-fire-frame', 'other', 'Walnut fireplace frame'), P('o-desk', 'other', 'Walnut office'), P('o-dresser', 'other', 'Walnut built-in dresser'),
  P('o-stairs', 'other', 'Under-stair pull-outs'), P('o-attic', 'other', 'Attic pull-out shelving'), P('o-banquette', 'other', 'Storage banquette'), P('o-murphy', 'other', 'Murphy bed and desk'), P('headboard', 'other', 'Panelled headboard wall')
];

// The curated "Featured" tab, in this order.
export const FEATURED = ['kitchen-white', 'm-slat', 'c-niche', 'w-2', 'bath', 'k-coffee2', 'm-walnut-shelves', 'l-1', 'media-fireplace', 'o-bunk', 'w-1', 'm-display-wide'];

// Gallery tabs: [category id, label]. 'all' = Featured.
export const CATS: [string, string][] = [['all', 'Featured'], ['kitchens', 'Kitchens'], ['baths', 'Bathrooms'], ['media', 'Media units'], ['laundry', 'Laundry rooms'], ['closets', 'Closets'], ['wine', 'Wine & bar'], ['other', 'Other cabinetry']];

// Photo shown beside each process step (same order as STEPS).
export const STEP_IMG = ['kitchen-modern', 'm-display-close', 'c-niche'];

export const FAMILY = [
  { where: 'Red Deer, Alberta', t: 'Livesey Brothers General Woodworking', d: 'Adam’s grandfather Art Livesey and his brother Jim owned and operated the family woodworking shop.' },
  { where: 'British Columbia', t: 'Livesey Brothers Sash & Door', d: 'When the brothers moved to B.C., they started Livesey Brothers Sash & Door.' },
  { where: 'Maple Ridge, BC', t: 'Capital Millwork Inc.', d: 'Founded by Adam Livesey, with over 20 years in the trade and a team of skilled craftsmen.' }
];

export const PROJECT_TYPES = ['Kitchen', 'Bathroom / vanity', 'Media unit', 'Laundry room', 'Closet', 'Commercial millwork', 'Other cabinetry or furniture'];
