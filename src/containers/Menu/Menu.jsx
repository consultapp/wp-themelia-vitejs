import { useCallback, useEffect, useMemo, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { isMobile } from "../../utils/functions";
import { useLocation } from "react-router-dom";

export default function MenuContainer() {
  const location = useLocation();

  const isMobileDevice = useMemo(isMobile, [location]);
  const [isOpen, setIsOpen] = useState(!isMobileDevice);

  const toggleButton = useCallback((flag) => {
    setIsOpen(!flag);
  }, []);

  useEffect(() => {
    if (isMobileDevice && isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <Menu isOpen={isOpen} toggleButton={toggleButton} />;
}
