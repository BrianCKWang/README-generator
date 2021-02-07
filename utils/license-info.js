// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    // Apache
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    // Boost
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    // BSD
    case 'BSD 3-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

    // Creative Commons
    case 'CC0':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Attribution 4.0 International':
      return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)(http://creativecommons.org/licenses/by/4.0/)';
    case 'Attribution-ShareAlike 4.0 International':
      return '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)';
    case 'Attribution-NonCommercial 4.0 International':
      return '[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)';
    case 'Attribution-NoDerivates 4.0 International':
      return '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)';
    case 'Attribution-NonCommmercial-ShareAlike 4.0 International':
      return '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)';
    case 'Attribution-NonCommercial-NoDerivatives 4.0 International':
      return '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)';
    
    // Eclipse
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    
    // GNU
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
    case 'GNU GPL v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
    case 'GNU AGPL v3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU LGPL v3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)';
    case 'GNU FDL v1.3':
      return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)';

    // IBM
    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';

    //ISC
    case 'ISC License (ISC)':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    
      // MIT
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    // Mozilla
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    
      // Open Data Commons
    case 'Attribution License (BY)':
      return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    case 'Open Database License (ODbL)':
      return '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)';
    case 'Public Domain Dedication and License (PDDL)':
      return '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)';

    // Perl
    case 'The Perl License':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    case 'The Artistic License 2.0':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    
    // SIL
    case 'SIL Open Font License 1.1':
      return '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
    
      // Unlicense
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

    // WTFPL
    case 'The Do What the Fuck You Want to Public License':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';

    // Zlib
    case 'The zlib/libpng License':
      return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
    
    default:
      return "";
  }
}

module.exports = renderLicenseBadge;